define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['home'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "	Welcome back "
    + this.escapeExpression((helpers.userfy || (depth0 && depth0.userfy) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.name : depth0),{"name":"userfy","hash":{},"data":data}))
    + "!\n"
    + ((stack1 = this.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
});