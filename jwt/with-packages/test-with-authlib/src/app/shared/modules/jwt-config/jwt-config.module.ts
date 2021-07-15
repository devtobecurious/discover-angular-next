import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["example.com"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  exports: [
    JwtModule
  ]
})
export class JwtConfigModule { }
