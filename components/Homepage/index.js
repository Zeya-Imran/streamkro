import MainBanner from './mainBanner';
import LatestMovies from './lates-movies';
import UpcomingMovies from './upcoming-movies';
import TopTenMovies from './top-ten-movies';
import TrendingMovies from './trending-movies';

const Index = ()=>{
    const design = (
        <>
            <MainBanner />
            <div className='bg-slate-800 p-8 sm:p-16 border'>
                <div className='flex flex-col gap-8 sm:gap-16'>
                    <LatestMovies />
                    <UpcomingMovies />
                    <TopTenMovies />
                    <TrendingMovies />
                </div>
             
            </div>
           
        </>
    );
    return design;
}
export default Index;