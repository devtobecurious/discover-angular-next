import { Routes } from "@angular/router";
import { AddNewJourney } from "./components/add-new-journey/add-new-journey";

export const journeyRoutes: Routes = [
    {
        path: 'add',
        component: AddNewJourney
    }
]