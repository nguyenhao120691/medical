from pymongo import MongoClient
from bson.objectid import ObjectId
URI = "mongodb://c4e3:codethechange@ds015939.mlab.com:15939/c4e3_movie"
client = MongoClient(URI)
db = client.get_default_database()
movies = db["movies"]
def the_movie ():
    i = 0
    for movie in movies.find():
        i +=1
        print(i,movie['trans_name'],"(",movie['year'],")")
        print(movie['ori_name'])
        print();
  
def them():
    ori_name = input('original_name : ')
    trans_name = input('translate_name :')
    quality = input(' what_quality : ')
    year = input(' Year : ')
    movies.insert_one({
        'original_name' : ori_name,
        'translate_name' : trans_name,
        'what_quality' : quality,
        'year' : year})
def xoa():
    xoa_phim = int(input('nhap so thu tu cua phim : '))
    i = 0
    for movie in movies.find():
        i +=1
        if xoa_phim ==i:
            movies.delete_one({'_id' : movie['_id']})
the_movie()
open_movie = input('What you want? : them or xoa ? ')
open_movie=open_movie.lower()
if open_moive=='them':
    them()
elif open_movie=='xoa':
    xoa()
the_movie()        
                         
                         





    


