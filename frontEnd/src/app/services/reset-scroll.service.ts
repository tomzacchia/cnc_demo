import { Router, NavigationEnd } from "@angular/router";
import { Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Subscription } from "rxjs";

export class ResetScrollService{

    routerSubscription: Subscription;

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private router: Router
      ) {}
    
      setScrollTop() {
        if (isPlatformBrowser(this.platformId)) {
          this.routerSubscription = this.router.events.subscribe((event: NavigationEnd) => {
            window.scroll(0, 0);
          });
        }
        this.routerSubscription.unsubscribe();
      }
}