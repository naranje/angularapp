import { ICategory } from './icategory';

export interface IClue {
    id: number,
    answer: string,
    question: string,
    value: number,
    airdate: Date,
    created_at: Date,
    updated_at: Date,
    category_id: number,
    game_id: number,
    invalid_count: number,
    category: ICategory
}
