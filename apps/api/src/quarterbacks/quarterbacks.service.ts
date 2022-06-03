import { Quarterback } from '@quarterback-angular/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class QuarterbacksService {
  mockQuarterbacks: Quarterback[] = [
    {
      id: '1',
      title: 'Patrick Mahomes',
      description: 'QB for the Kansas City Chiefs',
    },
    {
      id: '2',
      title: 'Aaron Rodgers',
      description: 'QB for the Green Bay Packers',
    },
    {
      id: '3',
      title: 'Josh Allen',
      description: 'QB for the Buffalo Bills',
    },
  ];

  findAll() {
    return this.mockQuarterbacks;
  }

  findOne(id: string) {
    return this.mockQuarterbacks.find((quarterback) => quarterback.id === id);
  }

  create(quarterback: Quarterback) {
    this.mockQuarterbacks = [
      ...this.mockQuarterbacks,
      Object.assign({}, quarterback, { id: uuidv4() }),
    ];
    return this.mockQuarterbacks;
  }

  update(id: string, quarterback: Quarterback) {
    this.mockQuarterbacks = this.mockQuarterbacks.map((w) =>
      w.id === id ? quarterback : w
    );
    return this.mockQuarterbacks;
  }

  remove(id: string) {
    this.mockQuarterbacks = this.mockQuarterbacks.filter(
      (quarterback) => quarterback.id !== id
    );
    return this.mockQuarterbacks;
  }
}
