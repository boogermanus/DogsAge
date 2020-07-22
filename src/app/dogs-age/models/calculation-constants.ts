export class CalculationConstants {
    static readonly DEFAULT_VALUE = 'c';
    static readonly EXOTIC = 'e';
    static readonly NEW = 'n';
    static readonly calculationTypes: any[] = [
        { typeValue: CalculationConstants.DEFAULT_VALUE, caption: 'Classic' },
        { typeValue: CalculationConstants.NEW, caption: 'New' },
        { typeValue: CalculationConstants.EXOTIC, caption: 'Exotic' }
    ];
}
