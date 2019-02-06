({
    cancelIt: function(cmp, event, helper) {
        // ダイアログを閉じる
        cmp.set("v.showDialog", false);
    },
    doIt: function(cmp, event, helper) {
        // OK ボタンクリック時の処理をする

        // ダイアログを閉じる
        cmp.set("v.showDialog", false);

    },
    toggleDialog: function(cmp, event, helper) {
        helper.toggleDialog(cmp);
    },
})