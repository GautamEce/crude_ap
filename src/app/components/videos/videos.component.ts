import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { VideoModel } from '../../model/video';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-videos',
  imports: [FormsModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  videoList: VideoModel [] = [];
  videoObj: VideoModel = new VideoModel();
videoSer = inject(VideoService);

// outo pulate tamplate
ngOnInit(): void {      
    this.getVideos();
}
getVideos(){
  this.videoSer.getVideo().subscribe((result:any)=>{
    this.videoList = result.data;

  })
}
onEdit(data:VideoModel){
  this.videoObj =data;

}

onSaveVideo(){
  debugger;
  this.videoSer.saveVideo(this.videoObj).subscribe((result:any)=>{
    if(result.result){
      alert("Video save success");
      this.getVideos();
    }else{
      alert(result.massage)
    }
  })
}
onUpdateVideo(){
  this.videoSer.updateVideo(this.videoObj).subscribe((result:any)=>{
    if(result.result){
      alert("Video updated success");
      this.getVideos();
    }else{
      alert(result.massage)
    }
  })
}
deleteVideo(id: number){
  const isDelete = confirm("Are you soure want to Delet");
  if(isDelete){
    this.videoSer.deletVideo(id).subscribe((result:any)=>{
      if(result.result){
        alert("Video deleted  success");
        this.getVideos();
      }else{
        alert(result.massage)
      }
    })
  }
}

}
