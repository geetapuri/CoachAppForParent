import { Component, OnInit } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';

import { Observable } from 'rxjs/Rx';
import { ScheduleComponent } from '../../components/schedule/schedule';
import { AttendanceComponent } from '../../components/attendance/attendance';
import { FeesComponent } from '../../components/fees/fees';
import { KidsComponent } from '../../components/kids/kids';
import { PerformanceComponent } from '../../components/performance/performance';
import { EventsComponent } from '../../components/events/events';
import { ManageClassesComponent } from '../../components/manage-classes/manage-classes';
import { ClassesComponent} from '../../components/classes/classes';
import { GroupsComponent} from '../../components/groups/groups';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  ngOnInit(){
    console.log("will call get parentID");
    this.springData.getParentID(this.user).subscribe(
      data => {
        console.log("in subscribe to data of getParentID");

        this.parent= data.parent;
        console.log("parent id received as : " + data.parent[0].parentID);
        //console.log("size = " + data.length);
      },
      err => console.error(err),
      () =>
        console.log('getParentID completed'),
    );
  }

  public user;
  public parent;


  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.user= navParams.get('role');
    console.log('received on home page, username = ' + this.user);
  }
  goToSchedule(){

    this.navCtrl.push(ScheduleComponent, {});
  }
  goToAttendance(){

    this.navCtrl.push(AttendanceComponent);

  }
  goToFees(){

    this.navCtrl.push(FeesComponent);
  }
  getKids(){
    console.log("in kids");
    this.navCtrl.push(KidsComponent);
  }

  goToManageGroups(){
    console.log("manage groups");
    this.navCtrl.push(GroupsComponent);
  }
  goToPerformance(){
    console.log("in performance");
    this.navCtrl.push(PerformanceComponent);
  }
  goToEvents(){
    console.log("in events");
    this.navCtrl.push(EventsComponent);
  }


}
