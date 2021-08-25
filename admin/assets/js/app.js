
//mark as unread
function mark_read(){
    let values = [];

    $('#mail-checkbox input[type="checkbox"]').each(function(){
        let $this = $(this);
        if ($this.is(':checked')) {
            values.push($this.val());
        }
    });
    
    $('#mail-array').val(values);
    $('#action-form #action-type').val('mark_as_read');
    $('#action-form').submit();
}

//mark as unread
function mark_unread(){
    let values = [];

    $('#mail-checkbox input[type="checkbox"]').each(function(){
        let $this = $(this);
        if ($this.is(':checked')) {
            values.push($this.val());
        }
    });
    
    $('#mail-array').val(values);
    $('#action-form #action-type').val('mark_as_unread');
    $('#action-form').submit();
}

//mark as starred
function mark_star(){
    let values = [];

    $('#mail-checkbox input[type="checkbox"]').each(function(){
        let $this = $(this);
        if ($this.is(':checked')) {
            values.push($this.val());
        }
    });
    
    $('#mail-array').val(values);
    $('#action-form #action-type').val('mark_as_starred');
    $('#action-form').submit();
}