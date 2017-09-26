/**
 * This class will give Utilities methods for refactoring code
 *
 * @export
 * @class RustUtils
 * @author Cristian Batista Herrera <cristianbatista@outlook.es>
 */
export class RustUtils {

    /**
     * Will return true if the object is Null or Blank
     *
     * @static
     * @param {*} object
     * @returns {boolean}
     * @memberof RustUtils
     */
    public static isNullOrBlank(objectValue: any): boolean {
        return objectValue === null || objectValue === undefined || objectValue === '';
    }
}
