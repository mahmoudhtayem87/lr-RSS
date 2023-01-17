import {Component, ElementRef} from '@angular/core';
import { extract } from '@extractus/feed-extractor'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'lr-rss',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lr-RSS';
  public isLoading : boolean = false;
  private rssURL: any = "https://api.rss2json.com/v1/api.json?rss_url=http://feeds.bbci.co.uk/news/rss.xml";
  public data :any;
  public feedImage : any = "";
  constructor(public httpClient:HttpClient,public elementRef: ElementRef) {
    this.loadData();
  }

  public async loadData()
  {
    this.isLoading = true;
    this.data = await this.getData();
    this.feedImage = this.data.feed.image;
    this.data = this.data.items;
    this.isLoading = false;
  }
  getConfiguration()
  {
    const config = this.elementRef.nativeElement.querySelector("config");
    if (!config)
      return;
    this.rssURL = config.getAttribute("rssURL") && config.getAttribute("rssURL").length > 4? config.getAttribute("rssURL"): this.rssURL;


  }

  async getData()
  {
    var prom  = new Promise((resolve,reject) =>{
      const requestOptions: Object = {
        observe: "body",
        responseType: "text"
      };
      this.httpClient.get<any>(this.rssURL,requestOptions).subscribe(result=>{
        resolve(JSON.parse(result));
      });
    });
    return prom;
  }
}
