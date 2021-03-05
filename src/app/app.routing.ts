import { Routes, RouterModule } from "@angular/router";
import {AnimationComponent} from "./animation/animation.component"
import { ShowdataComponent} from "./animation/showdata/showdata.component"
import { TrialComponent } from "./trial/trial.component";
const arr : Routes=[

{path:'', component: AnimationComponent },
{path:'trail/:id',component: TrialComponent},
{path:'showdata',component:ShowdataComponent },

{path:'**',redirectTo: 'pagenotfound' },

];
export const arrRouting = RouterModule.forRoot(arr);
