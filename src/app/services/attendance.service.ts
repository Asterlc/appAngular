import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Attendance } from '../models/attendanceModel';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  attendanceHelper: Attendance;
  constructor(private http: HttpClient) { }

  protected baseURL = `http://localhost:3000`;

  getAttendance(): Observable<Attendance[]> {
    const attendance = this.http.get<Attendance[]>(`${this.baseURL}/attendance`);
    return attendance;
  }

  // getAttendanceById() {
  //   this.http.get<Attendance>(`${this.baseURL}/attendance/`).subscribe(data => Object.assign(this.attendanceHelper, ...[data]));
  //   return this.attendanceHelper;
  // }

  createAttendance(body: Object): Attendance {
    this.http.post<Observable<Attendance>>(`${this.baseURL}/attendance`, body).subscribe(data => {
      Object.assign(this.attendanceHelper, ...[data])
    });
    return this.attendanceHelper;
  }
}
