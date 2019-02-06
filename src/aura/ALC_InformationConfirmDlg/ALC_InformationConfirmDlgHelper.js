({
    toggleDialog : function(cmp) {
        if(cmp.get("v.showDialog")) {
            this._showDialog(cmp);
        } else {
            this._hideDialog(cmp);
        }
    },
    _showDialog : function(cmp) {
        $A.util.addClass(cmp.find("confirmDialog"), "slds-fade-in-open");
        $A.util.addClass(cmp.find("confirmBackdrop"), "slds-backdrop--open");
    },
    _hideDialog : function(cmp) {
        $A.util.removeClass(cmp.find("confirmDialog"), "slds-fade-in-open");
        $A.util.removeClass(cmp.find("confirmBackdrop"), "slds-backdrop--open");
    },
})