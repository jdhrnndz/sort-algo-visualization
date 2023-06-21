export default function generateHslData (dataCount) {
    const hslData = [];

    let i = 0;
    while (i < dataCount) {
        hslData[i] = i / dataCount * 320;
        i++;
    }
    return hslData;
}
