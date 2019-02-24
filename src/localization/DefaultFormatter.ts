import * as resources from '../resources/resources';
import { TimeUnit, Tense } from '../common';
import { IFormatter } from './localization';

function format(resourceKey: string, culture: string, num?: number): string {
    const str: string = resources.getResource(culture)[resourceKey];
    if (num) {
        return resources.format(str, num);
    }
    return str;
}

function getResourceForDate(unit: TimeUnit, timeUnitTense: Tense, count: number, culture: string): string {
    var resourceKey: string = resources.getDateResourceKey(unit, timeUnitTense, count);
    return count === 1 ? format(resourceKey, culture) : format(resourceKey, culture, count);
}

function getResourceForTime(unit: TimeUnit, count: number, culture: string): string {
    var resourceKey: string = resources.getTimeResourceKey(unit, count);
    return count === 1 ? format(resourceKey, culture) : format(resourceKey, culture, count);
}


export class DefaultFormatter implements IFormatter {
    private culture: string;

    constructor(culture: string) {
        this.culture = culture;
    }

    DateHumanize_Now(): string {
        return getResourceForDate(TimeUnit.Millisecond, Tense.Past, 0, this.culture);
    }

    DateHumanize(timeunit: TimeUnit, timeUnitTense: Tense, unit: number): string {
        return getResourceForDate(timeunit, timeUnitTense, unit, this.culture);
    }

    TimeHumanizer_Zero(): string {
        return getResourceForTime(TimeUnit.Millisecond, 0, this.culture);
    }

    TimeHumanize(timeunit: TimeUnit, unit: number): string {
        return getResourceForTime(timeunit, unit, this.culture);
    }
}