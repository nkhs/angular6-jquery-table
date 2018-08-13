import { Component, AfterViewInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'app';
  list = [];
  constructor() {
    this.list.push(90);
    this.list.push(90);
    this.list.push(90);
  }
  isSearch = false;
  ngAfterViewInit(): void {
    $("#searchInput").hide();
    var self = this;
    $(document).ready(function () {

      var table = $('#example').DataTable({
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        // "searching": false,
        columnDefs: [
          // { width: '20%', targets: 0 }
        ],
        fixedColumns: true
      });

      $('#searchBtn')
        .click(function () {
          self.isSearch = !self.isSearch;
          if (self.isSearch) {
            $("#searchInput").show(100);
          } else {
            $("#searchInput").hide(100);
          }
        })
        $('#addBtn')
        .click(function () {
          $('#my_popup').popup();
        })
        

        $("#searchInput").keypress(function(e) {
          console.log(e);
          // You can use $(this) here, since this once again refers to your text input            
          if(e.which === 13) {
              e.preventDefault(); // Prevent form submit
              table.search($(this).val()).draw();
          }
      });
    });
  }
}
