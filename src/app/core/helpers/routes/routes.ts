import { BehaviorSubject } from 'rxjs';
export class routes {
  static navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  public static layoutDirection: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public static Url: string = '';
  static rtl = this.layoutDirection.subscribe((res: any) => {
    if (res == 'rtl') this.Url = res;
  });
  public static get baseUrl(): string {
    return routes.Url;
  }

 
  public static get home8(): string {
    return this.baseUrl + '/';
  }
  public static get contact(): string {
    return this.baseUrl + '/contact';
  }
  public static get blog(): string {
    return this.baseUrl + '/blog';
  } 
   public static get about(): string {
    return this.baseUrl + '/about';
  }
}
