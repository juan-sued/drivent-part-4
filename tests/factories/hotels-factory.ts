import faker from '@faker-js/faker';
import { prisma } from '@/config';

//Sabe criar objetos - Hotel do banco
export async function createHotel() {
  return await prisma.hotel.create({
    data: {
      name: faker.name.findName(),
      image: faker.image.imageUrl(),
    },
  });
}

export async function createRoomWithHotelId(hotelId: number) {
  return prisma.room.create({
    data: {
      name: '1020',
      capacity: 3,
      hotelId: hotelId,
    },
  });
}

export async function createRoom(hotelId: number) {
  return prisma.room.create({
    data: {
      hotelId,
      name: faker.name.findName(),
      capacity: 3,
    },
  });
}

export async function createRoomFull(hotelId: number) {
  return prisma.room.create({
    data: {
      hotelId,
      name: faker.name.findName(),
      capacity: 1,
    },
  });
}