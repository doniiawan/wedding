"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UserSeeder extends Seeder_1.default {
    async run() {
        await User_1.default.createMany([
            {
                uid: 'rudianzah',
                name: 'Rudianzah',
                session: true
            },
            {
                uid: 'maman-surachman',
                name: 'Maman Surachman',
                session: true
            },
            {
                uid: 'agus-atang',
                name: 'Agus Atang Wibowo',
                session: true
            },
            {
                uid: 'abdul-latief',
                name: 'Abdul Latief',
                session: true
            },
            {
                uid: 'chandra-suspara',
                name: 'Chandra Suspara Iswayudi',
                session: true
            },
            {
                uid: 'david-abdillah',
                name: 'David Abdillah Fahmi',
                session: true
            },
            {
                uid: 'teti-herawati',
                name: 'Teti Herawati',
                session: true
            },
            {
                uid: 'istikhanah',
                name: 'Istikhanah',
                session: false
            },
            {
                uid: 'yenny-nur',
                name: 'Yenny Nur Azizah',
                session: false
            },
            {
                uid: 'yolanda-faradilla',
                name: 'Yolanda Faradilla',
                session: true
            },
            {
                uid: 'linda',
                name: 'Linda',
                session: true
            },
            {
                uid: 'ayu-kusuma',
                name: 'Ayu',
                session: true
            },
            {
                uid: 'ariffiana-kusuma',
                name: 'Ariffiana Kusuma Dewi',
                session: true
            },
            {
                uid: 'indah-tartila',
                name: 'Indah Tartila',
                session: true
            },
            {
                uid: 'anisa-h',
                name: 'Anisa H',
                session: true
            },
            {
                uid: 'neny-f',
                name: 'Neny Fitria',
                session: false
            },
            {
                uid: 'yan-tamara',
                name: 'Yan Tamara',
                session: false
            }, {
                uid: 'puspa',
                name: 'Puspa Zanuar',
                session: false
            }, {
                uid: 'fanti',
                name: 'Fanti Z',
                session: false
            }, {
                uid: 'dicky',
                name: 'M. Dicky',
                session: false
            }, {
                uid: 'galuh',
                name: 'Galuh Ayu',
                session: false
            }, {
                uid: 'ira',
                name: 'Ira N',
                session: false
            }, {
                uid: 'meta',
                name: 'Meta Aprilia',
                session: false
            }, {
                uid: 'devita',
                name: 'Devita Putri',
                session: false
            }, {
                uid: 'ucik',
                name: 'Astri W',
                session: false
            }, {
                uid: 'novida',
                name: 'Novida Damayanti',
                session: false
            }, {
                uid: 'narulita',
                name: 'Narulita Dwi P',
                session: false
            }, {
                uid: 'nurul-amaliya',
                name: 'Nurul Amaliya',
                session: false
            }, {
                uid: 'kiki-ayu',
                name: 'Kiki Ayu',
                session: false
            }, {
                uid: 'khadifa-dwi',
                name: 'Khadifa Dwi',
                session: false
            }, {
                uid: 'mina',
                name: 'Mina Gusnita',
                session: false
            }, {
                uid: 'salma',
                name: 'Salma Lutfia',
                session: false
            }, {
                uid: 'ika-lupitasari',
                name: 'Ika Lupitasari',
                session: false
            }, {
                uid: 'laras',
                name: 'Laras',
                session: false
            }, {
                uid: 'adinda-henny',
                name: 'Adinda Henny',
                session: false
            }, {
                uid: 'nisa',
                name: 'Nisa',
                session: false
            },
            {
                uid: 'adit',
                name: 'Adit Sugianto',
                session: false
            },
            {
                uid: 'fandy',
                name: 'Fandy B',
                session: false
            },
            {
                uid: 'edwin',
                name: 'Edwin M K',
                session: false
            },
            {
                uid: 'kiki-doto',
                name: 'Kiki Adrian',
                session: false
            },
            {
                uid: 'annas',
                name: 'Annas',
                session: false
            },
            {
                uid: 'awed',
                name: 'Awed',
                session: false
            },
            {
                uid: 'emank-tunk',
                name: 'Firmansyah',
                session: false
            },
            {
                uid: 'bram',
                name: 'Brambang',
                session: false
            },
            {
                uid: 'cahyo',
                name: 'Cahyo K',
                session: false
            },
            {
                uid: 'mulki',
                name: 'Mulki',
                session: false
            },
            {
                uid: 'ardi-n',
                name: 'Ardi N',
                session: false
            },
            {
                uid: 'ghulam',
                name: 'Ghulam',
                session: false
            },
            {
                uid: 'huda',
                name: 'Huda',
                session: false
            }
        ]);
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=User.js.map