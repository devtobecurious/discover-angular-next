import { ListPlanetsComponent } from "../../list-planets/list-planets.component";

export const isNotOnEditGuard = (component: ListPlanetsComponent) => {
  return component.isInvalid;
};
