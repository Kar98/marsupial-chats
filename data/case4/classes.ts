import { Locator } from "@playwright/test";






export class MainPost{
    title: Locator;
    date: Locator;
    description: Locator;
    read_more: Locator;
    comments: Locator;
  }
  
  export class PopularPost{
    title: Locator;
    view_post: Locator;
  }
  
  export class AboutPage{
    text: Locator;
    viewBtn: Locator;
    rssFeed: Locator;
    totalBridges: Locator;
    async get_total(): Promise<number>{
      return -1;
    }
  }
  
  /** This is the main Bridges page. Setup how you would design this page. It can be done here or you can create a new file and import in the class
   * It's encouraged that you write your own design for the About section.
   */
  export class BridgesPage{
      aboutPage: AboutPage;
      async get_main_posts(): Promise<MainPost[]>{
        return [];
      }
      async get_popular_posts(): Promise<PopularPost[]>{
        return [];
      }
      async get_tags(): Promise<string[]>{
        return [];
      }
  }