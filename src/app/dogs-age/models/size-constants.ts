export class SizeConstants {
    static readonly SMALL = 's';
    static readonly MEDIUM = 'm';
    static readonly LARGE = 'l';
    
    static readonly sizes: any[] = [
        {typeValue: SizeConstants.SMALL, caption: 'Small (< 20 lbs)'},
        {typeValue: SizeConstants.MEDIUM, caption: 'Medium (21-50 lbs)'},
        {typeValue: SizeConstants.LARGE, caption: 'Large (> 50 lbs)'},
    ];
}
