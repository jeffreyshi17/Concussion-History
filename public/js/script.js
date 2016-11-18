
        $(document).ready(function () {
        $('input:checkbox').change(function () {
            if ($(this).is(":checked")) {
                if(document.getElementById(this.id +"form")) {
                    document.getElementById(this.id +"form").style.display = "inline";
                    var m = $("#"+this.id + "form").find('.suboption').find('input:checkbox')
                    for (var j = 0; j<m.length; j++){
                        m[j].checked = false;
                    }
                    $("#"+this.id + "form").find('input:text').val('');
                }
            }
            else {
                if(document.getElementById((this).id +"form")) {
                    document.getElementById((this).id +"form").style.display = "none";
                }
            }
        });
            $('input:radio').change(function () {
                if ($(this).is(":checked")) {
                    var x = document.getElementsByName(this.name);
                    for (var i = 0; i<x.length; i++){
                        if(document.getElementById(x[i].id +"form")) {
                            document.getElementById(x[i].id + "form").style.display = "none";
                            var m = $("#"+this.id + "form").find('.suboption').find('input:checkbox')
                            for (var j = 0; j<m.length; j++){
                                m[j].checked = false;
                            }
                            $("#"+x[i].id + "form").find('input:text').val('');
                        }
                    }
                    document.getElementById(this.id +"form").style.display = "inline";
                }
            });
        });