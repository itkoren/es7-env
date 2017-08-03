/*
    Methods of the parent class can be redefined in the child class.
*/

class User {
    constructor() {
        this.accessMatrix = {};
    }
    hasAccess( page ) {
        return !!this.accessMatrix[ page ];
    }
}
 
class SuperUser extends User {
    hasAccess(  ) {
        return true;
    }
}
 
var user = new User();
var su = new SuperUser();
 
console.log(su.hasAccess( 'ADMIN_DASHBOARD' ));
console.log(user.hasAccess( 'ADMIN_DASHBOARD' ));
