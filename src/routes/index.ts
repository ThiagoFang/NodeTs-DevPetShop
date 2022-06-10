import { Router} from 'express';
import * as searchController from '../controllers/searchController'
import * as pageController from '../controllers/pageController'

const router = Router();

router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/cats', pageController.cats);
router.get('/fishes', pageController.fishes);

router.get('/search', searchController.search);

export default router;