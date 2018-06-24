import { Component } from '@angular/core';
import { AddScheduleComponent } from '../add-schedule/add-schedule';
import { NavController, NavParams } from 'ionic-angular';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import { EditScheduleDetailsComponent } from '../edit-schedule-details/edit-schedule-details';
/**
 * Generated class for the ScheduleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'schedule',
  templateUrl: 'schedule.html'
})
export class ScheduleComponent {

  text: string;
  scheduleList = [];
  myDate: String = new Date().toISOString();
  groupList =[];
  public selectedGroup;
  public selectedKid;
  public kidsList;
  public parent;

  constructor(private springData: GetDataFromSpringProvider, public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello ScheduleComponent Component');
    this.text = 'Hello World Schedule Component';
    this.parent = this.navParams.get('parent');
  }

  public onItemSelection(selection){
    let item=this.selectedKid;
    if (selection!=undefined){
      console.log("item selected: "+item.kidName );

    }
  }

  getKids(){
    this.springData.getKidInfoParent(parent).subscribe(
      data => {

        this.kidsList= data.kidList;
        this.selectedKid= data.kidList[0];

      },
      err => console.error(err),
      () => console.log('getKidInfoParent completed')
    )
  }

  getSchedule(){

        this.springData.getScheduleKid(this.selectedKid.kidID).subscribe(
          data => {


            this.scheduleList= data.Schedule;
          },
          err => console.error(err),
          () =>
            console.log('get schedule Kid completed'),
        );
      }


  addSchedule(){

    this.navCtrl.push(AddScheduleComponent, {});

  }

  goToEditScheduleDetails(item){

    this.navCtrl.push(EditScheduleDetailsComponent, {item: item});

  }





}
