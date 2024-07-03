import {
  DestroyRef,
  Injector,
  assertInInjectionContext,
  effect,
  inject,
  isSignal,
  untracked
} from "./chunk-2IL6UC6U.js";
import "./chunk-LZU6IAWD.js";
import {
  Subject,
  isObservable,
  noop
} from "./chunk-T4MZFKTR.js";

// node_modules/@ngrx/signals/fesm2022/ngrx-signals-rxjs-interop.mjs
function rxMethod(generator, config) {
  if (!config?.injector) {
    assertInInjectionContext(rxMethod);
  }
  const injector = config?.injector ?? inject(Injector);
  const destroyRef = injector.get(DestroyRef);
  const source$ = new Subject();
  const sourceSub = generator(source$).subscribe();
  destroyRef.onDestroy(() => sourceSub.unsubscribe());
  const rxMethodFn = (input) => {
    if (isSignal(input)) {
      const watcher = effect(() => {
        const value = input();
        untracked(() => source$.next(value));
      }, { injector });
      const instanceSub = { unsubscribe: () => watcher.destroy() };
      sourceSub.add(instanceSub);
      return instanceSub;
    }
    if (isObservable(input)) {
      const instanceSub = input.subscribe((value) => source$.next(value));
      sourceSub.add(instanceSub);
      return instanceSub;
    }
    source$.next(input);
    return { unsubscribe: noop };
  };
  rxMethodFn.unsubscribe = sourceSub.unsubscribe.bind(sourceSub);
  return rxMethodFn;
}
export {
  rxMethod
};
//# sourceMappingURL=@ngrx_signals_rxjs-interop.js.map
