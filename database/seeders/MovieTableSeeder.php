<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movie = [
            [
                'name' => 'One Piece',
                'slug' => 'one-piece', 
                'category' => 'Anime', 
                'video_url' => 'https://www.youtube.com/watch?v=6hB3s9bIaco', 
                'thumbnail' => 'https://picsum.photos/id/1/300/300',
                'rating' => 9.3,
            ],
            [
                'name' => 'Kimetsu No Yaiba',
                'slug' => 'kimetsu-no-yaibe', 
                'category' => 'Anime', 
                'video_url' => 'https://www.youtube.com/watch?v=6hB3s9bIaco', 
                'thumbnail' => 'https://picsum.photos/id/1/300/300',
                'rating' => 9.0,
            ]
        ];

        Movie::insert($movie);
    }
}
