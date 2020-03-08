
export class Person {
    Age: number = 0;
    Sex: number = 0;
    ChestPain: number = 0;
    Trestbps: number = 0;
    Chol: number = 0;
    Fbs: number = 0;
    RestEcg: number = 0;
    Thalach: number = 0;
    Exang: number = 0;
    Oldpeak: number = 0;
    Slope: number = 0;
    Ca: number = 0;
    Thal: number = 3;
}

export class DiseasePrediction {
    value: string;
}

export class ModelParameters {
    deep: number = 15;
}

export class ModelResult {
    accuracy: number = 0;
}
