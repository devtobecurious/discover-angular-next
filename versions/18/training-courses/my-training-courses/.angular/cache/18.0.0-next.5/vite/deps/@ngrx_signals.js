import {
  DestroyRef,
  Injectable,
  computed,
  inject,
  isSignal,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable
} from "./chunk-2IL6UC6U.js";
import "./chunk-LZU6IAWD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-T4MZFKTR.js";

// node_modules/@ngrx/signals/fesm2022/ngrx-signals.mjs
var STATE_SIGNAL = Symbol("STATE_SIGNAL");
function getState(stateSignal) {
  return stateSignal[STATE_SIGNAL]();
}
function patchState(stateSignal, ...updaters) {
  stateSignal[STATE_SIGNAL].update((currentState) => updaters.reduce((nextState, updater) => __spreadValues(__spreadValues({}, nextState), typeof updater === "function" ? updater(nextState) : updater), currentState));
}
function toDeepSignal(signal2) {
  const value = untracked(() => signal2());
  if (!isRecord(value)) {
    return signal2;
  }
  return new Proxy(signal2, {
    get(target, prop) {
      if (!(prop in value)) {
        return target[prop];
      }
      if (!isSignal(target[prop])) {
        Object.defineProperty(target, prop, {
          value: computed(() => target()[prop]),
          configurable: true
        });
      }
      return toDeepSignal(target[prop]);
    }
  });
}
function isRecord(value) {
  return value?.constructor === Object;
}
function signalState(initialState) {
  const stateSignal = signal(initialState);
  const deepSignal = toDeepSignal(stateSignal.asReadonly());
  Object.defineProperty(deepSignal, STATE_SIGNAL, {
    value: stateSignal
  });
  return deepSignal;
}
function signalStore(...args) {
  const signalStoreArgs = [...args];
  const config = "providedIn" in signalStoreArgs[0] ? signalStoreArgs.shift() : {};
  const features = signalStoreArgs;
  class SignalStore {
    constructor() {
      const innerStore = features.reduce((store, feature) => feature(store), getInitialInnerStore());
      const {
        slices,
        signals,
        methods,
        hooks
      } = innerStore;
      const props = __spreadValues(__spreadValues(__spreadValues({}, slices), signals), methods);
      this[STATE_SIGNAL] = innerStore[STATE_SIGNAL];
      for (const key in props) {
        this[key] = props[key];
      }
      const {
        onInit,
        onDestroy
      } = hooks;
      if (onInit) {
        onInit();
      }
      if (onDestroy) {
        inject(DestroyRef).onDestroy(onDestroy);
      }
    }
    /** @nocollapse */
    static ɵfac = function SignalStore_Factory(t) {
      return new (t || SignalStore)();
    };
    /** @nocollapse */
    static ɵprov = ɵɵdefineInjectable({
      token: SignalStore,
      factory: SignalStore.ɵfac,
      providedIn: config.providedIn || null
    });
  }
  (() => {
    (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignalStore, [{
      type: Injectable,
      args: [{
        providedIn: config.providedIn || null
      }]
    }], () => [], null);
  })();
  return SignalStore;
}
function getInitialInnerStore() {
  return {
    [STATE_SIGNAL]: signal({}),
    slices: {},
    signals: {},
    methods: {},
    hooks: {}
  };
}
function signalStoreFeature(featureOrInput, ...restFeatures) {
  const features = typeof featureOrInput === "function" ? [featureOrInput, ...restFeatures] : restFeatures;
  return (inputStore) => features.reduce((store, feature) => feature(store), inputStore);
}
function type() {
  return void 0;
}
function excludeKeys(obj, keys) {
  return Object.keys(obj).reduce((acc, key) => {
    if (!keys.includes(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function withComputed(signalsFactory) {
  return (store) => {
    const signals = signalsFactory(__spreadValues(__spreadValues({}, store.slices), store.signals));
    const signalsKeys = Object.keys(signals);
    const slices = excludeKeys(store.slices, signalsKeys);
    const methods = excludeKeys(store.methods, signalsKeys);
    return __spreadProps(__spreadValues({}, store), {
      slices,
      signals: __spreadValues(__spreadValues({}, store.signals), signals),
      methods
    });
  };
}
function withHooks(hooksOrFactory) {
  return (store) => {
    const storeProps = __spreadValues(__spreadValues(__spreadValues({
      [STATE_SIGNAL]: store[STATE_SIGNAL]
    }, store.slices), store.signals), store.methods);
    const hooks = typeof hooksOrFactory === "function" ? hooksOrFactory(storeProps) : hooksOrFactory;
    const createHook = (name) => {
      const hook = hooks[name];
      const currentHook = store.hooks[name];
      return hook ? () => {
        if (currentHook) {
          currentHook();
        }
        hook(storeProps);
      } : currentHook;
    };
    return __spreadProps(__spreadValues({}, store), {
      hooks: {
        onInit: createHook("onInit"),
        onDestroy: createHook("onDestroy")
      }
    });
  };
}
function withMethods(methodsFactory) {
  return (store) => {
    const methods = methodsFactory(__spreadValues(__spreadValues(__spreadValues({
      [STATE_SIGNAL]: store[STATE_SIGNAL]
    }, store.slices), store.signals), store.methods));
    const methodsKeys = Object.keys(methods);
    const slices = excludeKeys(store.slices, methodsKeys);
    const signals = excludeKeys(store.signals, methodsKeys);
    return __spreadProps(__spreadValues({}, store), {
      slices,
      signals,
      methods: __spreadValues(__spreadValues({}, store.methods), methods)
    });
  };
}
function withState(stateOrFactory) {
  return (store) => {
    const state = typeof stateOrFactory === "function" ? stateOrFactory() : stateOrFactory;
    const stateKeys = Object.keys(state);
    store[STATE_SIGNAL].update((currentState) => __spreadValues(__spreadValues({}, currentState), state));
    const slices = stateKeys.reduce((acc, key) => {
      const slice = computed(() => store[STATE_SIGNAL]()[key]);
      return __spreadProps(__spreadValues({}, acc), {
        [key]: toDeepSignal(slice)
      });
    }, {});
    const signals = excludeKeys(store.signals, stateKeys);
    const methods = excludeKeys(store.methods, stateKeys);
    return __spreadProps(__spreadValues({}, store), {
      slices: __spreadValues(__spreadValues({}, store.slices), slices),
      signals,
      methods
    });
  };
}
export {
  getState,
  patchState,
  signalState,
  signalStore,
  signalStoreFeature,
  type,
  withComputed,
  withHooks,
  withMethods,
  withState
};
//# sourceMappingURL=@ngrx_signals.js.map
