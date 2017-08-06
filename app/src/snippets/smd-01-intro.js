/**
 * Starting with ECMAScript 2015, a shorter syntax for method definitions on objects initializers is introduced.
 * It is a shorthand for a function assigned to the method's name.
 * 
 * =====> Syntax
 * 
        var obj = {
            property( parameters… ) {},
            *generator( parameters… ) {},
            async property( parameters… ) {},
            async* generator( parameters… ) {},

            // with computed keys:
            [property]( parameters… ) {},
            *[generator]( parameters… ) {},
            async [property]( parameters… ) {},

            // compare getter/setter syntax:
            get property() {},
            set property(value) {}
        };
 * 
 */