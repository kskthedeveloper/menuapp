import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-dashboard-edit',
  templateUrl: './admin-dashboard-edit.component.html',
  styleUrls: ['./admin-dashboard-edit.component.scss']
})
export class AdminDashboardEditComponent implements OnInit {

  menuName: string;

  downloadURL: Observable<string>;
  uploadPercent: Observable<number>

  downloadURL2: Observable<string>;
  uploadPercent2: Observable<number>

  downloadURL3: Observable<string>;
  uploadPercent3: Observable<number>

  downloadURL4: Observable<string>;
  uploadPercent4: Observable<number>

  constructor(private db: AngularFirestore, private activatedRoute: ActivatedRoute, private storage: AngularFireStorage) {
    this.menuName = this.activatedRoute.snapshot.paramMap.get('name');
    this.db.collection('menus').doc(this.menuName).snapshotChanges()
      .pipe(map((result) => {

        if (!result.payload.exists) {
          this.db.collection('menus').doc(this.menuName).set({});
        } else {
          const data = result.payload.data()['imagePaths'];
          console.log(data);
          if ( data ) {
            this.downloadURL =  data[0] || '';
            this.downloadURL2 =  data[1] || '';
            this.downloadURL3 =  data[2] || '';
            this.downloadURL4 =  data[3] || '';
          }
        }
      })).subscribe();
  }

  ngOnInit(): void {
  }

  uploadFile(filePath, event) {

    const file = event.target.files[0];
    const task = this.storage.upload(this.menuName + '/' + file.name, file);
    const fileRef = this.storage.ref(this.menuName + '/' + file.name);

    console.log("File Path, ", filePath);

    if (filePath == 1) {
      this.uploadPercent = task.percentageChanges();
    }

    if (filePath == 2) {
      this.uploadPercent2 = task.percentageChanges();
    }

    if (filePath == 3) {
      this.uploadPercent3 = task.percentageChanges();
    }

    if (filePath == 4) {
      this.uploadPercent4 = task.percentageChanges();
    }

    task.snapshotChanges().pipe(
      finalize(() => {
        if (filePath == 1) {
           fileRef.getDownloadURL().subscribe((value)=> {
             this.downloadURL = value;
           });
        }

        if (filePath == 2) {
          fileRef.getDownloadURL().subscribe((value)=> {
            this.downloadURL2 = value;
          });
        }

        if (filePath == 3) {
          fileRef.getDownloadURL().subscribe((value)=> {
            this.downloadURL3 = value;
          });
        }

        if (filePath == 4) {
          fileRef.getDownloadURL().subscribe((value)=> {
            this.downloadURL4 = value;
          });
        }
      })
    ).subscribe();
  }

  update() {
    const test = {
      imagePaths: [
        this.downloadURL,
        this.downloadURL2,
        this.downloadURL3,
        this.downloadURL4,
      ]
    }
    console.log(test);
    this.db.collection('menus').doc(this.menuName).set(test);
  }
}
