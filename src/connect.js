import makeStoreInstance from './store';
import { bindActionCreators } from 'redux';
import Component, { tracked } from '@glimmer/component';

let store = makeStoreInstance();

function changedKeys(props, newProps) {
  return Object.keys(props).filter(key => {
    return props[key] !== newProps[key];
  });
}

export default (stateToComputed, dispatchToActions= () => ({})) => {

  return IncomingComponent => {

    const WrappedComponent = IncomingComponent || Component;

    return class Connect extends WrappedComponent {

      constructor(args) {
        super(args);

        if (stateToComputed) {
          let props = stateToComputed.call(this, store.getState());
          Object.keys(props).forEach(name => {
            let descriptor = tracked(this, name, {
              enumerable: true,
              configurable: false,
              set() {},
              get() {
                return stateToComputed.call(this, store.getState())[name];
              }
            });
            Object.defineProperty(this, name, descriptor);
          });

          this._handleChange = () => {
            let newProps = stateToComputed.call(this, store.getState());

            if (props === newProps) return;

            let notifyProperties = changedKeys(props, newProps);

            props = newProps;

            notifyProperties.forEach(name => {
              this[name] = store.getState()[name];
            });
          }

          this.unsubscribe = store.subscribe(() => {
            this._handleChange();
          });
        }

        let actions;
        if (typeof dispatchToActions === 'function') {
          actions = dispatchToActions.call(this, store.dispatch);
        }

        if (typeof dispatchToActions === 'object') {
          actions = bindActionCreators(dispatchToActions, store.dispatch);
        }

        Object.keys(actions).forEach(action => {
          Object.defineProperty(this, action, {
            enumerable: true,
            configurable: false,
            set() {},
            get() {
              return actions[action];
            }
          });
        });
      }

      willDestroy() {
        if (this.unsubscribe) {
          this.unsubscribe();
          this.unsubscribe = null;
        }
      }

    }

  }
}
