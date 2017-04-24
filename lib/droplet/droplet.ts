'use strict';
import { IDroplet } from './interfaces';
import DropletEndpoint from './endpoint';
import Asset from '../common/asset';
import { IRegion } from "../region/interfaces";
import { IImage } from '../image/interfaces';
import { ISize } from "../size/interfaces";
/**
 * Droplet asset.
 * 
 * @class Droplet
 * @extends {Asset<DropletEndpoint>}
 * @implements {IDroplet}
 */
class Droplet extends Asset<DropletEndpoint> implements IDroplet {
    readonly backup_ids: Array<string>;
    readonly created_at: string;
    readonly disk: number;
    readonly features: Array<string>;
    readonly id: number;
    readonly image: IImage;
    readonly kernel: any | null;
    readonly locked: boolean;
    readonly memory: number;
    readonly name: string;
    readonly networks: object;
    readonly next_backup_window: any | null;
    readonly region: IRegion;
    readonly size_slug: string;
    readonly size: ISize;
    readonly snapshot_ids: Array<string>;
    readonly status: string;
    readonly tags: Array<string>;
    readonly vcpus: number;
    readonly volume_ids: Array<string>;
    /**
     * Creates an instance of Droplet.
     * @param {DropletEndpoint} endpoint 
     * @param {IDroplet} droplet 
     * 
     * @memberOf Droplet
     */
    constructor(endpoint: DropletEndpoint, droplet: IDroplet) {
        super(endpoint);
        this.backup_ids = droplet.backup_ids;
        this.created_at = droplet.created_at;
        this.disk = droplet.disk;
        this.features = droplet.features;
        this.id = droplet.id;
        this.image = droplet.image;
        this.kernel = droplet.kernel;
        this.locked = droplet.locked;
        this.memory = droplet.memory;
        this.name = droplet.name;
        this.networks = droplet.networks;
        this.next_backup_window = droplet.next_backup_window;
        this.region = droplet.region;
        this.size_slug = droplet.size_slug;
        this.size = droplet.size;
        this.snapshot_ids = droplet.snapshot_ids;
        this.status = droplet.status;
        this.tags = droplet.tags;
        this.vcpus = droplet.vcpus;
        this.volume_ids = droplet.volume_ids;
    }
    /**
     * Attach droplet to droplet.
     * 
     * @param {number} droplet_id 
     * @returns 
     * 
     * @memberOf Droplet
     */
    public async attach(droplet_id: number) {
        return this.endpoint.attach(this.id, droplet_id);
    }
    /**
     * Create snapshot from droplet.
     * 
     * @param {string} name 
     * @returns 
     * 
     * @memberOf Droplet
     */
    public async createSnapshot(name: string) {
        return this.endpoint.createSnapshot(this.id, name);
    }
    /**
     * Delete droplet
     * 
     * @returns 
     * 
     * @memberOf Droplet
     */
    public async delete() {
        return this.endpoint.delete(this.id);
    }
    /**
     * Detach droplet from droplet.
     * 
     * @param {number} [droplet_id] 
     * @returns 
     * 
     * @memberOf Droplet
     */
    public async detach(droplet_id?: number) {
        if (!droplet_id) droplet_id = this.droplet_ids[0] || null;
        return this.endpoint.detach(this.id, droplet_id);
    }
    /**
     * Get droplet's action.
     * 
     * @param {number} id 
     * @returns 
     * 
     * @memberOf Droplet
     */
    public async getActionById(id: number) {
        return this.endpoint.getActionById(this.id, id);
    }
    /**
     * List all droplet's action.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns 
     * 
     * @memberOf Droplet
     */
    public async listActions(page: number, perPage?: number) {
        return this.endpoint.listActions(this.id, page, perPage);
    }
    /**
     * List all droplet's snapshots.
     * 
     * @param {number} page 
     * @param {number} [perPage] 
     * @returns 
     * 
     * @memberOf Droplet
     */
    public async listSnapshots(page: number, perPage?: number) {
        return this.endpoint.listSnapshots(this.id, page, perPage);
    }
}

export default Droplet;