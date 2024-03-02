export type Review = {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: Date;
}

export type User = {
    userName: {
        firstName: string;
        lastName: string;
    },
    isReturning: boolean;
    stayedAt: string[];
}

export type Property = {
    image: string;
    title: string;
    pricePerNight: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    email: string;
    isAvailable: boolean;
}
