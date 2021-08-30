import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  name: string = "";
  osVersion: string = "";
  uuid: string = "";
  platform: string = "";

 eldevice: any = '';
  lat:number
  lon:number
  total:string

  latitude:number ;
  	longitude:number ;
  constructor(public plt: Platform,public navCtrl: NavController, public geolocation:Geolocation, public device: Device) {

  }



   ngOnInit(){






    this.getGeolocation();
    this.ejecutar()


   }



   async   getGeolocation(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
      this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;

    });





  }

  success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
  };
    error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };


    ejecutar(){
      this.plt.ready().then(() => {
        this.osVersion = this.device.version;
        this.uuid = this.device.uuid;
        this.name = (window as any).device.name;
        this.platform = this.device.platform;
        console.log(this.osVersion)
        });
    }

}
