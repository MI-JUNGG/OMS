export const mixin = {
    flex: (justify = "center", align = "center") =>
        `display:flex;
    justify-content:${justify};
    align-items:${align}`,
};