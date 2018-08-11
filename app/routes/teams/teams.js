import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /teams:
 *   get:
 *     tags:
 *       - levels
 *     description: Returns all teams
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of teams
 *         schema:
 *           type: array
 *           items:
 *              $ref: '#/definitions/teams'
 */

router.get('/');


/**
 * @swagger
 * /teams/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: id of team
 *     tags:
 *       - teams
 *     description: Returns team with given id
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Object of a particular team
 *         schema:
 *           type: object
 *           $ref: '#/definitions/teams'
 *       404:
 *         description: team with specific id not found
 */

router.get('/:id');

/**
 * @swagger
 * /teams/create:
 *   post:
 *     parameters:
 *       - in: body
 *         name: team
 *         required: true
 *         description: the team to create
 *         schema:
 *           type: object
 *           $ref: '#/definitions/teams'
 *     tags:
 *       - teams
 *     description: Creates new team
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: New team created
 *         schema:
 *           type: object
 *           $ref: '#/definitions/teams'
 *       400:
 *         description: team already exists
 *       401:
 *         description: Unauthorised request
 */

router.post('/create');

/**
 * @swagger
 * /teams/{id}:
 *   put:
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: id of team
 *       - in: body
 *         name: team
 *         required: true
 *         description: updated team information
 *         schema:
 *           type: object
 *           $ref: '#/definitions/teams'
 *     tags:
 *       - teams
 *     description: Updates team with given id
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Object of a particular team
 *         schema:
 *           type: object
 *           $ref: '#/definitions/teams'
 *       404:
 *         description: team with specific id not found
 *       401:
 *         description: Unauthorized request
 */

router.put('/:id');

export default router;
