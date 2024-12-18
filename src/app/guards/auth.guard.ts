import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router)
  if(sessionStorage.getItem("token")){
    return true;
  }
  else{
    alert("Unauthorised access...Please Login")
    router.navigateByUrl("/login")
    return false;
  }
};
