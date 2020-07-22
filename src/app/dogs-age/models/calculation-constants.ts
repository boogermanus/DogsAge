export class CalculationConstants {
    static readonly CLASSIC = 'c';
    static readonly EXOTIC = 'e';
    static readonly NEW = 'n';
    static readonly calculationTypes: any[] = [
        { typeValue: CalculationConstants.CLASSIC, caption: 'Classic' },
        { typeValue: CalculationConstants.NEW, caption: 'New' },
        { typeValue: CalculationConstants.EXOTIC, caption: 'Exotic' }
    ];
}
