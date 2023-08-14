const Datas = [
    {
        id: 1,
        question:
            'User documentation is part of your definition of "Done". However, there aren’t enough technical writers for all teams. Your Development Team doesn’t have a technical writer. What should you do?',
        options: [
            'A. Form a separate team of technical writers that will work on an on-demand basis for the various Product Owners. Work order will be first in, first out.',
            'B. Let the user documentation remain undone and accumulate until after the last development Sprint. It will then be done by any available technical writers.',
            'C. Wait until you have a technical writer on your Development Team to take care of this.',
            'D. Your Development Team is still responsible for creating user documentation. In this case, the Development Team members will write it.',
        ],
    },

    {
        id: 2,
        question: 'The Product Backlog is ordered by:',
        options: [
            'A. The Product Owner with the most valuable items placed at the top.',
            'B. Risk, where safer items are at the top, and riskier items are at the bottom.',
            'C. Items are randomly arranged.',
            'D. Size, where small items are at the top and large items are at the bottom.',
        ],
    },

    {
        id: 3,
        question:
            'What happens if the Development Team cannot complete its work by the end of the Sprint?',
        options: [
            'A. The Sprint is extended and future Sprints use this new duration.',
            'B. The Sprint length holds and the Development Team continuously learns what is actually possible to do within a Sprint of this length.',
            'C. The Sprint is extended temporarily. Lessons are taken to ensure it doesn’t happen again.',
        ],
    },

    {
        id: 4,
        question: 'Which topics should be discussed in the Sprint Review?',
        options: [
            'A. The Scrum process, and how it was used during the Sprint.',
            'B. Coding and engineering practices.',
            'C. Sprint results.',
            'D. All of the above.',
        ],
    },

    {
        id: 5,
        question:
            'A member of the Development Team takes the Scrum Master aside to express his concerns about data security issues. What should the Scrum Master do?',
        options: [
            'A. Add security to the definition of ""Done"".',
            'B. Tell the Product Owner to stop further development of features until the issues are fixed.',
            'C. Create a Product Backlog item for security.',
            'D. Go check with the testers.',
            'E. Ask the person to share the issue with the team as soon as possible.',
        ],
    },
]
export const answers = [3, 0, 1, 2, 4]

export default Datas
