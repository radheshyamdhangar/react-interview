import students from './students.json';

// This is a fast api
export const getStudents = () => {
    return new Promise((res, rej) => {
        res(students);        
    });
};

// This is slow api
export const getCalculatedMark = (studet) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(studet?.totalMark * 0.9);
        }, 3000);
    })
}
