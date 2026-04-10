export function filterGroupsBySubject(groups, subject) {
    return groups.filter(group => group.subject === subject.trim());
}