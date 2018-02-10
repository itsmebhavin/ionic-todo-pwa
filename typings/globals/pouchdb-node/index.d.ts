// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/28ef3d201b4271f3bb6c417b01a98d5706dd62a5/pouchdb-node/index.d.ts
declare namespace PouchDB {
    namespace Core {
        interface DatabaseInfo {
            /** The backend *DOWN adapter being used (MemDOWN, RiakDOWN, …). */
            backend_adapter?: string;
        }
    }
}

declare module 'pouchdb-node' {
    const PouchDb: PouchDB.Static;
    export = PouchDb;
}
