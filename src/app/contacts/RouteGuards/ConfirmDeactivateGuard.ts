import { CanDeactivate } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { Injectable } from '@angular/core';
import { CanComponentDeactivate } from "./CanComponentDeactivate";


@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate) {
        return  component.canDeactivate ? component.canDeactivate():window.confirm('Do you really want to cancel?');
    }
}

