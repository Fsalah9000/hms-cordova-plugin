/*
    Copyright 2020-2021. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License")
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
import { Component, OnInit } from '@angular/core';
import { BeaconBarrier } from '@hmscore/ionic-native-hms-awareness/ngx';
@Component({
  selector: 'app-beacon-barrier',
  templateUrl: './beacon-barrier.page.html',
  styleUrls: ['./beacon-barrier.page.scss'],
})
export class BeaconBarrierPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public addBeaconBarrierKeep() {
    let barrierlLabel = "BeaconBarrierKeep";
    let namespace = "sample namespace";
    let type = "sample type";
    let content = ["c", "o", "n", "t", "e", "n", "t"];
    BeaconBarrier.keep(namespace, type, content)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }
  public addBeaconBarrierDiscover() {
    let barrierlLabel = "BeaconBarrierDiscover";
    let namespace = "sample namespace";
    let type = "sample type";
    let content = ["c", "o", "n", "t", "e", "n", "t"];
    BeaconBarrier.discover(namespace, type, content)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }
  public addBeaconBarrierMissed() {
    let barrierlLabel = "BeaconBarrierMissed";
    let namespace = "sample namespace";
    let type = "sample type";
    let content = ["c", "o", "n", "t", "e", "n", "t"];
    BeaconBarrier.missed(namespace, type, content)
      .subscribe((data) => {
        console.log(JSON.stringify(data));
      }).catch((err) => {
        console.log(JSON.stringify(err));
      }).run(barrierlLabel);
  }


}
