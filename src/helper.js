export function getYearDifference(year){
    return new Date().getFullYear() - year;
}

export function calculateByBrand(brand){
    let increase;

    switch(brand){
        case 'american':
            increase = 1.15; //15%
            break;
        case 'asian': 
            increase = 1.05; //5%
            break;
        case 'european':
            increase = 1.3; //30%
            break;
        default:
            break;
    }

    return increase;
}

export function calculateCoverage(coverage){
    return (coverage === 'basic') ? 1.20 : 1.50;
}